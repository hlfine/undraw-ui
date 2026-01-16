import { App } from 'vue'
import { animation } from './directives'

export default {
  install: (app: App<Element>) => {
    app.directive('animation', animation)
  }
}
