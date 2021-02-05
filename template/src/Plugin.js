import React from 'react'
import { FlexPlugin } from 'flex-plugin'
import { addConfigActions, getDefaultConfig } from './helpers'
import { packageName } from './constants'
import ExampleComponent from './components/ExampleComponent'

const PLUGIN_NAME = '{{pluginClassName}}'

export default class {{pluginClassName}} extends FlexPlugin {
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

    let accountSid = manager.serviceConfiguration.account_sid
    accountSid = accountSid.slice(accountSid.length - 6)
    //enabled by default
    const enabledLsKey = packageName + '-' + accountSid
    const enabled = localStorage.getItem(enabledLsKey)
    if (!enabled) {
      localStorage.setItem(enabledLsKey, 'true')
    } else if (enabled === 'false') {
      console.log('not activating plugin', packageName)
      return
    }

    const config = getDefaultConfig(accountSid)

    flex.AgentDesktopView.Panel2.Content.add(
      <ExampleComponent config={config} key='template-example-comp' />,
      {
        sortOrder: -5,
      },
    )
  }
}
