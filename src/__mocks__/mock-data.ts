import { TAdvertType, TPaymentFieldType, TType01, TWalletType } from 'types';

export const mockAdvertValues = {
    account_currency: 'USD',
    active_orders: 2,
    advertiser_details: {
        completed_orders_count: 0,
        has_not_been_recommended: true,
        id: '96',
        is_blocked: false,
        is_favourite: false,
        is_online: true,
        is_recommended: false,
        last_online_time: 1714031576,
        loginid: 'CR90000533',
        name: 'client CR90000533',
        rating_average: null,
        rating_count: 0,
        recommended_average: null,
        recommended_count: null,
        total_completion_rate: null,
    },
    amount: 10,
    amount_display: '10',
    block_trade: 0 as TType01,
    contact_info: '02203400',
    counterparty_type: 'buy' as 'buy' | 'sell',
    country: 'id',
    created_time: 1714017654,
    days_until_archive: 4,
    deleted: 1 as const,
    description: 'Created by script. Please call me 02203400',
    effective_rate: 16183.8,
    effective_rate_display: '16183.80',
    eligibility_status: ['join_date' as 'completion_rate' | 'country' | 'join_date' | 'rating_average'],
    eligible_countries: ['af', 'al'],
    id: '236',
    is_active: true,
    is_block_trade: false,
    is_buy: true,
    is_deleted: false,
    is_eligible: 0 as TType01,
    is_floating: true,
    is_sell: false,
    is_visible: true,
    local_currency: 'IDR',
    max_order_amount: 50,
    max_order_amount_display: '50.00',
    max_order_amount_limit: 50,
    max_order_amount_limit_display: '50.00',
    min_completion_rate: 0,
    min_join_days: 15,
    min_order_amount: 5,
    min_order_amount_display: '5.00',
    min_order_amount_limit: 1,
    min_order_amount_limit_display: '1.00',
    min_rating: 0,
    order_expiry_period: 3600,
    payment_info: 'Your bank details',
    payment_method: '',
    payment_method_details: {
        '1': {
            display_name: 'Alipay',
            fields: {
                account: {
                    display_name: 'Alipay ID',
                    required: 1,
                    type: 'text' as 'memo' | 'text',
                    value: '12345',
                },
                instructions: {
                    display_name: 'Instructions',
                    required: 0,
                    type: 'memo' as 'memo' | 'text',
                    value: 'Alipay instructions',
                },
            },
            is_enabled: 1 as TType01,
            method: 'alipay',
            type: 'ewallet' as 'bank' | 'ewallet' | 'other',
            used_by_adverts: ['1'],
            used_by_orders: ['1'],
        },
    },
    payment_method_names: ['Alipay'],
    price: 16183.8,
    price_display: '16183.80',
    rate: -0.1,
    rate_display: '-0.10',
    rate_type: 'float' as 'fixed' | 'float',
    remaining_amount: 10,
    remaining_amount_display: '10',
    type: 'sell' as 'buy' | 'sell',
    visibility_status: ['advertiser_temp_ban'] as TAdvertType['visibility_status'],
};

export const mockAdvertiserPaymentMethods = [
    {
        display_name: 'Other',
        fields: {
            account: {
                display_name: 'Account ID / phone number / email',
                required: 0,
                type: 'text' as TPaymentFieldType,
                value: 'adfg',
            },
            instructions: {
                display_name: 'Instructions',
                required: 0,
                type: 'memo' as TPaymentFieldType,
                value: 'rtbnrt',
            },
            name: {
                display_name: 'Payment method name',
                required: 1,
                type: 'text' as TPaymentFieldType,
                value: 'wrtnwrtn',
            },
        },
        id: '89',
        is_enabled: 1 as TType01,
        method: 'other',
        type: 'other' as TWalletType,
        used_by_adverts: ['194'],
        used_by_orders: null,
    },
];

export const mockCountryList = {
    af: {
        country_name: 'Afghanistan',
        cross_border_ads_enabled: 1,
        fixed_rate_adverts: 'enabled',
        float_rate_adverts: 'disabled',
        float_rate_offset_limit: 10,
        local_currency: 'AFN',
        payment_methods: {
            alipay: {
                display_name: 'Alipay',
                fields: {
                    account: {
                        display_name: 'Alipay ID',
                        required: 1,
                        type: 'text',
                    },
                    instructions: {
                        display_name: 'Instructions',
                        required: 0,
                        type: 'memo',
                    },
                },
                type: 'ewallet',
            },
        },
    },
};

export const mockPaymentMethods = [
    {
        display_name: 'Bank Transfer',
        fields: {
            account: {
                display_name: 'Account Number',
                required: 1,
                type: 'text',
                value: 'Account Number',
            },
            bank_name: { display_name: 'Bank Transfer', required: 1, type: 'text', value: 'Bank Name' },
        },
        id: 'test1',
        is_enabled: 0,
        method: '',
        type: 'bank',
        used_by_adverts: null,
        used_by_orders: null,
    },
    {
        display_name: 'Ali pay',
        fields: {
            account: {
                display_name: 'Account Number',
                required: 1,
                type: 'text',
                value: 'Account Number',
            },
            bank_name: { display_name: 'Ali pay', required: 1, type: 'text', value: 'Bank Name' },
        },
        id: 'test2',
        is_enabled: 0,
        method: '',
        type: 'wallet',
        used_by_adverts: null,
        used_by_orders: null,
    },
    {
        display_name: 'Skrill',
        fields: {
            account: {
                display_name: 'Account Number',
                required: 1,
                type: 'text',
                value: 'Account Number',
            },
            bank_name: { display_name: 'Skrill', required: 1, type: 'text', value: 'Bank Name' },
        },
        id: 'test3',
        is_enabled: 0,
        method: '',
        type: 'wallet',
        used_by_adverts: null,
        used_by_orders: null,
    },
];

export const mockAdvertiserAdvertValues = {
    account_currency: 'USD',
    active_orders: 0,
    advertiser_details: {
        completed_orders_count: 0,
        has_not_been_recommended: false,
        id: '34',
        is_blocked: false,
        is_favourite: false,
        is_online: true,
        is_recommended: false,
        last_online_time: 1688480346,
        name: 'client CR90000212',
        rating_average: null,
        rating_count: 0,
        recommended_average: null,
        recommended_count: null,
        total_completion_rate: null,
    },
    amount: 22,
    amount_display: '22.00',
    block_trade: false,
    contact_info: '',
    counterparty_type: 'sell' as const,
    country: 'id',
    created_time: new Date(1688460999),
    currentRateType: 'fixed' as const,
    days_until_archive: 1,
    description: '',
    effective_rate: 22,
    effective_rate_display: '22.00',
    eligible_countries: ['ID'],
    id: '138',
    is_active: true,
    is_floating: false,
    is_visible: true,
    local_currency: 'IDR',
    max_order_amount: 22,
    max_order_amount_display: '22.00',
    max_order_amount_limit: 22,
    max_order_amount_limit_display: '22.00',
    min_completion_rate: 22,
    min_join_days: 4,
    min_order_amount: 22,
    min_order_amount_display: '22.00',
    min_order_amount_limit: 22,
    min_order_amount_limit_display: '22.00',
    min_rating: 4,
    order_expiry_period: 900,
    payment_info: '',
    payment_method: null,
    payment_method_names: ['Bank Transfer'],
    price: 22,
    price_display: '22.00',
    rate: 22,
    rate_display: '22.00',
    rate_type: 'fixed' as const,
    remaining_amount: 22,
    remaining_amount_display: '22.00',
    type: 'buy' as const,
    visibility_status: [],
};
