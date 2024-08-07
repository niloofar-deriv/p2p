import { MouseEventHandler } from 'react';
import { LabelPairedStarLgFillIcon } from '@deriv/quill-icons';
import { Button, Text, useDevice } from '@deriv-com/ui';

type TOrderRatingButtonProps = {
    buttonLabel?: string;
    isDetails?: boolean;
    isDisabled?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const OrderRatingButton = ({
    buttonLabel = 'Rate',
    isDetails = false,
    isDisabled,
    onClick,
}: TOrderRatingButtonProps) => {
    const { isDesktop } = useDevice();

    return (
        <Button
            className='ml-8 w-fit border-[1px]'
            color='black'
            disabled={isDisabled}
            onClick={onClick}
            variant='outlined'
        >
            <Text className='flex gap-2' size={isDesktop ? 'xs' : 'sm'} weight={isDetails ? 'normal' : 'bold'}>
                <LabelPairedStarLgFillIcon fill='#FFAD3A' height={16} width={16} />
                {buttonLabel}
            </Text>
        </Button>
    );
};

export default OrderRatingButton;
