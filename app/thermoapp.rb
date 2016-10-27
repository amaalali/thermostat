require 'sinatra/base'
# require 'models/thermostat'

class ThermoApp < Sinatra::Base

  # before do
  #   @thermo = Thermostat.new
  # end

  get '/' do
     erb:'index'
  end

  post '/' do
    erb:'index'
    # @thermo.update(:temp params[:temp])
    # @thermo.save
  end

  post '/data' do
    erb:'index'
  end
  # run! if app_file == $0

end
