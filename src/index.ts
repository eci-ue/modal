/**
 * @file 弹框
 * @author svon.me@gmail.com
 */

import "./style/modal.less";
import {setAppContext} from "./utils/config";

export * from "./utils/index";
export {SetModal} from "./lib/modal";
export {SetConfig} from "./lib/config";
export {confirm as modal} from "./components/confirm";


import type {App} from "vue";

export type {ModalProps} from "./components/type";

export const install = function (app: App): App {
  setAppContext(app);
  return app;
};

export default {
  install
}
