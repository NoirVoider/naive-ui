function getTranslation (locales, fallbackLocale, language, namespace, key) {
  const locale = locales[language]
  if (locale) {
    return locale[namespace][key]
  } else {
    return fallbackLocale[namespace][key]
  }
}

function getTranslationNamespace (locales, fallbackLocale, language, namespace) {
  const locale = locales[language]
  if (locale) {
    return locale[namespace]
  } else {
    return fallbackLocale[namespace]
  }
}

export default function createLocaleMixin (componentLocaleNamespace) {
  return {
    inject: {
      NConfigProvider: {
        default: null
      }
    },
    computed: {
      locale () {
        if (this.NConfigProvider) {
          return this.NConfigProvider.inheritedLanguage
        } else {
          return this.$naive.fallbackLocale
        }
      },
      localeNamespace () {
        return this.tns(componentLocaleNamespace)
      }
    },
    methods: {
      t (namespace, key) {
        let language = null
        if (this.NConfigProvider) {
          language = this.NConfigProvider.inheritedLanguage
        }
        return getTranslation(
          this.$naive.locales,
          this.$naive.fallbackLocale,
          language,
          namespace,
          key
        )
      },
      tns (namespace) {
        let language = null
        if (this.NConfigProvider) {
          language = this.NConfigProvider.inheritedLanguage
        }
        return getTranslationNamespace(
          this.$naive.locales,
          this.$naive.fallbackLocale,
          language,
          namespace
        )
      }
    }
  }
}