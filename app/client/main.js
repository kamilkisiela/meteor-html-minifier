import { Template } from 'meteor/templating';

import './main.html';
import { url, raw, minified } from '../imports/test.html5';

Template.hello.helpers({
  url() {
    return url;
  },
  raw() {
    return raw;
  },
  minified() {
    return minified;
  }
});
