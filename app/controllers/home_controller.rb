class HomeController < ApplicationController
  def index
  end

  def validword
    @wordList = findwords(params[:boggleSet])
  
    render json: @wordList
  end

  private

  def request_api(url)
    response = Excon.get(
      url,
      headers: {
        'X-RapidAPI-Host' => URI.parse(url).host,
        'X-RapidAPI-Key' => 'a13a617270msh41bd912366869e6p1178b5jsn825c2115762d'
      }
    )

    return nil if response.status != 200

    JSON.parse(response.body)
  end

  def findwords(boggleSet)
    request_api(
      "https://codebox-boggle-v1.p.rapidapi.com/#{(boggleSet)}"
    )
  end
end
