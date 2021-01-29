import React from 'react'

class ExampleComponent extends React.Component {
  state = { config: null }

  render() {
    const { config } = this.props

    return (
      <div>
        Here is that config to turn on/off things
        <br />
        {JSON.stringify(config, null, 2)}
      </div>
    )
  }
}

export default ExampleComponent
