import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CustomTaskListComponent from './CustomTaskListComponent';
import KickFlipReservationComponent from './KickFlipReservationComponent';

export default class KickflipHandoffPlugin extends FlexPlugin {
  pluginName = 'KickflipHandoffPlugin';

  init(flex, manager) {
    flex.TaskList.Content.add(<CustomTaskListComponent key="demo-component" />, {
      sortOrder: -1,
    });

    flex.AgentDesktopView.Panel2.Content.replace(<KickFlipReservationComponent key="demo1-component"/>, {
      sortOrder: -1,
    });
  }
}
