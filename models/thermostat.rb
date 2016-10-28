class Thermostat_settings
  include DataMapper::Resource

  property :id,    Serial
  property :title, String
  property :temperature,   String

end
