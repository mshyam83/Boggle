require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get "/"
    assert_response :success
  end

  test "GET validword" do
    get "/validword?boggleSet=SKHRQZQZOTXEKDYT"
    assert_response :success    
  end
end
