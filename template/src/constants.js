const packageName = '{{name}}'

const pluginConfig = {
  agent: {
    location: 'panel2',
    enableXYZFeature: true,
  },
  supervisor: {
    enabled: true,
  },
  dependentValues: {
    enabled: true,
    location: 'panel3',
  },
}

const configForm = {
  title: 'Example Settings',
  type: 'object',
  properties: {
    agent: {
      $ref: '#/definitions/agent',
    },
    supervisor: {
      $ref: '#/definitions/supervisor',
    },
    dependentValues: {
      $ref: '#/definitions/dependentValues',
    },
  },
  definitions: {
    agent: {
      title: 'Agent',
      type: 'object',
      properties: {
        location: {
          type: 'string',
          title: 'Location',
          enum: ['panel2', 'panel3', 'taskCanvas'],
          enumNames: ['Primary Panel', 'Right-Side Panel', 'Task Canvas'],
          default: 'panel2',
        },
        enableXYZFeature: {
          type: 'boolean',
          title: 'Enable a thing',
          default: true,
        },
      },
    },
    supervisor: {
      title: 'Supervisor',
      type: 'object',
      properties: {
        enabled: {
          type: 'boolean',
          default: true,
        },
      },
    },
    dependentValues: {
      title: 'Can have schema dependencies',
      type: 'object',
      properties: {
        enabled: {
          type: 'boolean',
          default: true,
        },
      },
      dependencies: {
        enabled: {
          oneOf: [
            {
              properties: {
                enabled: {
                  enum: [true],
                },
                location: {
                  type: 'string',
                  title: 'Location',
                  enum: ['panel2', 'panel3'],
                  enumNames: ['Primary Panel', 'Right-Side Panel'],
                  default: 'panel2',
                },
              },
            },
            {
              properties: {
                enabled: {
                  enum: [false],
                },
              },
            },
          ],
        },
      },
    },
  },
}

const uiSchema = {}

export { packageName, pluginConfig, configForm, uiSchema }
