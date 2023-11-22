import {phoneValidator} from '@/utils/validators';

export default {
    attribute: {
        loc: 'Атрибуты формы',
        children: [
            {
                id: 'LastName',
                type: 'text',
                loc: 'Фамилия',
                req: true,
            },
            {
                id: 'FirstName',
                type: 'text',
                loc: 'Имя',
                req: true,
            },
            {
                id: 'Patronymic',
                type: 'text',
                loc: 'Отчество',
            },
            {
                id: 'PhoneNumber',
                type: 'number',
                loc: 'Номер телефона',
                req: true,
                min: 11,
                validator: phoneValidator,
            },
            {
                id: 'Sex',
                type: 'selector',
                loc: 'Пол',
                children: ['Мужщчина', 'Женщина'],
            },
            {
                id: 'ClientGroups',
                type: 'multi-selector',
                loc: 'Группа клиентов',
                req: true,
                children: ['VIP', 'Проблемные', 'ОМС'],
            },
            {
                id: 'Doctor',
                type: 'selector',
                loc: 'Лечащий врач',
                children: ['Иванов', 'Захаров', 'Чернышева'],
            },
            {
                id: 'NotSendSMS',
                type: 'checkbox',
                loc: 'Не отправлять СМС',
            },
        ],
    },
    address: {
        loc: 'Адрес',
        children: [
            {
                id: 'AddressIndex',
                type: 'number',
                loc: 'Индекс',
            },
            {
                id: 'AddressCountry',
                type: 'text',
                loc: 'Страна',
            },
            {
                id: 'AddressRegion',
                type: 'text',
                loc: 'Область',
            },
            {
                id: 'AddressCity',
                type: 'text',
                loc: 'Город',
                req: true,
            },
            {
                id: 'AddressStreet',
                type: 'text',
                loc: 'Улица',
            },
            {
                id: 'AddressHome',
                type: 'number',
                loc: 'Дом',
            },
        ],
    },
    identifier: {
        loc: 'Паспорт',
        children: [
            {
                id: 'IdentifierType',
                type: 'selector',
                loc: 'Тип документа',
                req: true,
                children: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
            },
            {
                id: 'IdentifierSerial',
                type: 'number',
                loc: 'Серия',
            },
            {
                id: 'IdentifierNumber',
                type: 'number',
                loc: 'Номер',
            },
            {
                id: 'IdentifierWhoDal',
                type: 'text',
                loc: 'Кем выдан',
            },
            {
                id: 'IdentifierDate',
                type: 'date',
                loc: 'Дата выдачи',
                req: true,
            },
        ],
    },
};
