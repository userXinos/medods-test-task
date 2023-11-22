import * as validators from '@vuelidate/validators';

import ruLocale from '../locales/ru.json';

const {createI18nMessage} = validators;
const withI18nMessage = createI18nMessage({t});

export const required = withI18nMessage(validators.required);

/**
 * да, это i18n !
 * @param {string} key
 * @return {string}
 */
export function t(key) {
    if (key in ruLocale) {
        return ruLocale[key];
    }
    return key;
}
