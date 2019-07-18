import Service from './Service';

Service.install = (Vue) => {
  Vue.component(Service.name, Service);
};

export default Service;
