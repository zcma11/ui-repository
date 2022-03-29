import Theme from 'vitepress/dist/client/theme-default'
import Test from '../../../src/components/Test'
import HelloWorld from '../../../src/components/HelloWorld.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import 'vitepress-theme-demoblock/theme/styles/index.css'

export default {
  ...Theme,
  enhanceApp({app}) {
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}