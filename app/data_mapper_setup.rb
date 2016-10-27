require 'data_mapper'
require 'dm-postgres-adapter'

require_relative 'models/thermostat'

DataMapper.setup(:default, "postgres://localhost/thermostat_test")
DataMapper.finalize
DataMapper.auto_upgrade!
