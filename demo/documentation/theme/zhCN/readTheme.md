# 获取主题
使用配置消费者（Config Consumer）来获取当前位置上的主题。

```html
<n-config-provider :theme="theme">
  <n-button @click="theme = 'dark'">深色</n-button>
  <n-button @click="theme = 'light'">浅色</n-button>
  <n-config-consumer
    @theme-change="handleThemeChange"
  >
    <template v-slot="{ theme }">
      <div>主题：{{ theme }}</div>
    </template>
  </n-config-consumer>
</n-config-provider>
```
```js
export default {
  data () {
    return {
      theme: 'dark'
    }
  },
  methods: {
    handleThemeChange (theme) {
      this.$NMessage.info(theme)
    }
  }
}
```
```css
.n-button {
  margin: 0 12px 8px 0;
}
```