class RegistrationsController < Devise::RegistrationsController
  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.html { redirect_to root_path, notice: 'user was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :username, :password, :name, :phone_number, :avatar, :role_id, :phone_number, :aggrement)
    end
end