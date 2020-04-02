Rails.application.routes.draw do
  root 'home#index'
  get 'validword', to: 'home#validword'
end
