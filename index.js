import Vue from 'vue';
import firebase from 'firebase';

const validateOptions = (opts) => {
  let isValid = true;
  let mandatoryFields = [
    'apiKey',
    'authDomain',
    'databaseURL',
    'projectId',
    'storageBucket',
    'messagingSenderId'
  ];

  mandatoryFields.forEach((field) => {
    if (Object.keys(opt).indexOf(field) === -1) {
      console.error(`[ERR - VueFireApp]: Miss configuration, the field ${field} is mandatory on options.`);
      isValid = false;
    }
  });

  return isValid;
};


const VueFireApp = {
  install: (Vue, options) => {
    if (Vue.fireAppInstalled) {
      return;
    }

    if (validateOptions(options)) {
      const fireApp = firebase.initializeApp(options);
      Vue.fireAppInstalled = true;

      Vue.fireApp = fireApp;
      Vue.prototype.$fireApp = fireApp; 
    }
  },
};


export default VueFireApp;
