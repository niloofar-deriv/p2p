import { renderHook } from '@testing-library/react';
import { OrderDetailsProvider, useOrderDetails } from '../OrderDetailsProvider';

describe('useOrderDetails', () => {
    it('should return the orderDetails from context', () => {
        const mockValues = { isErrorOrderInfo: false, orderDetails: 'mockOrderDetails' };

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <OrderDetailsProvider value={mockValues}>{children}</OrderDetailsProvider>
        );

        const { result } = renderHook(() => useOrderDetails(), { wrapper });

        expect(result.current).toEqual(mockValues);
    });
});
