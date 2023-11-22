import {t} from '@/utils/i18n-validators';

export const phoneValidator = {
    $validator: function phoneValidator(v) {
        return v.startsWith('7') && v.length === 11;
    },
    $message: t('invalidPhone'),
    $params: {
        type: 'phoneValidator',
    },
};
