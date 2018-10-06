class Api::SessionsController < ApplicationController

  def create
  end

  def destroy
    if !logged_in?
      render json: { base: ['no user to log out fool'] }, status: 404
    else
      logout!
      render json: {}
    end
  end
end
