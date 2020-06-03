class HomesController < ApplicationController
  before_action :authenticate_user!, only: [:index]
  def index
  end

  def get_data
    @data = sort_data(params[:data])
  end

  def sort_data(data)
    return data if data.length <= 1 
    status = true
    while status do
      status = false
      0.upto(data.length-2) do |i|
        if data[i].to_i > data[i+1].to_i
          data[i], data[i+1] = data[i+1], data[i]
          status = true
        end
      end    
    end

    return data
  end
end
