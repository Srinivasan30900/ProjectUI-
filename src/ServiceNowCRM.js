import React from 'react';
import { FlexPlugin } from 'flex-plugin';

import CRMComponent from './components/CRMComponent';

const PLUGIN_NAME = 'ServiceNowCRM';

export default class ServiceNowCRM extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    const options = { sortOrder: -1 };
    flex.CRMContainer
      .Content
      .replace(<CRMComponent key="demo-component" />, options);
  }
}
