# vue-web-components

This repo stores generated bundles produces by "vue-web-component-wrapper"

### What is included?
- vue-dynamic-star-rating (star-rating)

### How to add additional Web Component into the bundle ?
1. Import or create a new vue component.
2. Run `npm run build COMPONENT_NAME ./COMPONENT_PATH.vue`. It will create `bundle/COMPONENT_NAME.js` 
3. Commit this file.


For example, if you want to convert some external Vue Component into the Web Component and add into this bundle, you can run the following commands:
1. `npm i library_name --save`
2. `npm run build component_name ./node_modules/library_name/component.vue`
3. Commit generated file `bundle/some_vue_component.js` and push. 

### For more info
[vue-web-component-wrapper](https://github.com/vuejs/vue-web-component-wrapper)

[Vue CLI](https://cli.vuejs.org/guide/build-targets.html#web-component)
