const Convict = require('convict');
const yaml = require('yaml')
const path = require('path')

// add support for YAML files
Convict.addParser({ extension: ['yml', 'yaml'], parse: yaml.parse });

// load schema.yml
const config = Convict(path.resolve(__dirname, 'schema.yml'))

const paths = [
  path.resolve(__dirname, '..', 'app/config.yml'),
  path.resolve(__dirname, '..', 'app/config_prod.yml')
]

config.loadFile(paths);

config.validate();

// show final Object
console.log(JSON.stringify(config.getProperties(), null, 2))

// get current port
console.log(config.get('http.port'))
