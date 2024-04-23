import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdvertiserNameToggle from '../AdvertiserNameToggle';

const mockProps = {
    advertiserInfo: {
        fullName: 'Jane Doe',
        should_show_name: false,
    },
    onToggle: jest.fn(),
};
const mockUseAdvertiserUpdateMutate = jest.fn();

jest.mock('@deriv/api-v2', () => ({
    ...jest.requireActual('@deriv/api-v2'),
    p2p: {
        advertiser: {
            useUpdate: jest.fn(() => ({
                mutate: mockUseAdvertiserUpdateMutate,
            })),
        },
    },
}));

describe('AdvertiserNameToggle', () => {
    it('should render full name in toggle', () => {
        render(<AdvertiserNameToggle {...mockProps} />);
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
    it('should switch full name settings', async () => {
        render(<AdvertiserNameToggle {...mockProps} />);
        const labelBtn = screen.getByRole('checkbox');
        await userEvent.click(labelBtn);

        expect(mockUseAdvertiserUpdateMutate).toBeCalledWith({
            show_name: 1,
        });
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();
        await userEvent.click(labelBtn);

        expect(mockUseAdvertiserUpdateMutate).toBeCalledWith({
            show_name: 0,
        });
    });
});
