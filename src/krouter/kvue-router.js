let Vue;
// 实现一个插件：挂载 $router

class KVueRouter {
  constructor(options) {
    this.$options = options;
  }
}

KVueRouter.install = function(_Vue) {
  Vue = _Vue;
  // 怎么获取根实例中的router选项
  Vue.mixin({
    beforeCreate() {
      console.log(this.$options.router);
      // 确保根实例的时候才执行
      if(this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    }
  });
  // 实现两个全局组件router-link和router-view
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      // <a href="">abc</a>
      // h(tag, data, children)
      console.log('this.$slots', this.$slots)
      return h('a', {attrs: {'href': '#' + this.to}}, this.$slots.default)
      // return <a href={'#' + this.to}>{this.$slots.default}</a>
    }
  });
  Vue.component('router-view', {});
};

export default KVueRouter;