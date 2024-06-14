import { useState } from 'react';
import clsx from 'clsx';
import { MenuItem, Submenu, Text, useDevice } from '@deriv-com/ui';
import { PlatformSwitcher } from '../PlatformSwitcher';
import { MobileMenuConfig, TSubmenuSection } from './MobileMenuConfig';
import { SubmenuContent } from './SubmenuContent';

export const MenuContent = () => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [renderSubmenuFor, setRenderSubmenuFor] = useState<TSubmenuSection>('accountSettings');
    const { isMobile } = useDevice();
    const textSize = isMobile ? 'md' : 'sm';

    const data = MobileMenuConfig().menuConfig;

    return (
        <div className='flex flex-col h-full'>
            {!isSubmenuOpen && (
                <div className='flex items-center justify-center h-28 border-b border-[#f2f3f4]'>
                    <PlatformSwitcher />
                </div>
            )}

            <div className='relative h-full pt-4'>
                {data.map((item, index) => {
                    const removeBorderBottom = item.find(({ removeBorderBottom }) => removeBorderBottom);

                    return (
                        <div
                            className={clsx('pl-[4.8rem] pr-[1.6rem]', {
                                'border-b border-[#f2f3f4]': !removeBorderBottom,
                            })}
                            key={index}
                        >
                            {item.map(
                                ({ LeftComponent, RightComponent, as, href, label, onClick, submenu, target }) => {
                                    if (as === 'a') {
                                        return (
                                            <MenuItem
                                                as='a'
                                                className='h-[5.6rem]'
                                                disableHover
                                                href={href}
                                                key={label}
                                                leftComponent={
                                                    <LeftComponent className='mr-[1.6rem]' height={16} width={16} />
                                                }
                                                target={target}
                                            >
                                                <Text size={textSize}>{label}</Text>
                                            </MenuItem>
                                        );
                                    }
                                    return (
                                        <MenuItem
                                            as='button'
                                            className='w-full h-[5.6rem]'
                                            disableHover
                                            key={label}
                                            leftComponent={<LeftComponent className='mr-[1.6rem]' iconSize='xs' />}
                                            onClick={() => {
                                                if (submenu) {
                                                    setRenderSubmenuFor(submenu);
                                                    setIsSubmenuOpen(true);
                                                } else onClick?.();
                                            }}
                                            rightComponent={RightComponent}
                                        >
                                            <Text className='mr-auto' size={textSize}>
                                                {label}
                                            </Text>
                                        </MenuItem>
                                    );
                                }
                            )}
                        </div>
                    );
                })}

                <Submenu className='overflow-y-auto z-10' isOpen={isSubmenuOpen}>
                    <SubmenuContent onBackClick={() => setIsSubmenuOpen(false)} renderContentFor={renderSubmenuFor} />
                </Submenu>
            </div>
        </div>
    );
};