Rails.application.routes.draw do
  devise_for :users, controllers: {sessions: "sessions", passwords: "passwords", registrations: "registrations"}

  root to: "homes#index"
  
  get 'get_data' => 'homes#get_data', as: 'get_data'
  get 'process_data' => 'homes#process_data', as: 'process_data'
end
