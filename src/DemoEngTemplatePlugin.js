import React from 'react'
import { FlexPlugin } from 'flex-plugin'
import { addConfigActions, getDefaultConfig } from './helpers'
import { packageName } from './constants'
import ExampleComponent from './components/ExampleComponent'

const PLUGIN_NAME = 'DemoEngTemplatePlugin'

export default class DemoEngTemplatePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME)
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    addConfigActions(flex)

    //enabled by default (can also have disabled by default, so doesn't exist set it to false)
    const enabled = localStorage.getItem(packageName)
    if (!enabled) {
      localStorage.setItem(packageName, 'true')
    } else if (enabled === 'false') {
      console.log('not activating plugin', packageName)
      return
    }

    const config = getDefaultConfig()

    flex.AgentDesktopView.Panel2.Content.add(
      <ExampleComponent config={config} key='template-example-comp' />,
      {
        sortOrder: -5,
      },
    )
  }
}
