class InvestorsController < ApplicationController
  # /investors
  def index
    render json: Investor.all.map { |investor| investor_mapper(investor) }
  end

  def investor
    investor = Investor.find(params[:investor_id])

    render json: investor_mapper(investor)
  end

  def create
    puts "CREATE params = #{JSON.pretty_generate(params)}"
    investor = Investor.new(
      {
        first_name: params[:first_name],
        last_name: params[:last_name],
        date_of_birth: params[:date_of_birth].to_date,
        phone: params[:phone],
        address_1: params[:address_1],
        address_2: params[:address_2],
        state: params[:state],
        zip: params[:zip]
      }
    )
    investor.save!

    render json: investor_mapper(investor)
  end

  def edit
    puts "EDIT params = #{JSON.pretty_generate(params)}"
    investor = Investor.find(params[:investor_id])
    render json: { success: false } if investor.nil?

    investor.assign_attributes(
      {
        first_name: params[:first_name],
        last_name: params[:last_name],
        date_of_birth: params[:date_of_birth].to_date,
        phone: params[:phone],
        address_1: params[:address_1],
        address_2: params[:address_2],
        state: params[:state],
        zip: params[:zip]
      }
    )
    investor.save!

    render json: investor_mapper(investor)
  end

  def delete
    investor = Investor.find(params[:investor_id])
    render json: { success: false } if investor.nil?

    investor.destroy

    render json: {
      success: true
    }
  end

  private

  def investor_mapper(investor)
    {
      id: investor.id,
      first_name: investor.first_name,
      last_name: investor.last_name,
      date_of_birth: investor.date_of_birth,
      phone: investor.phone,
      address_1: investor.address_1,
      address_2: investor.address_2,
      state: investor.state,
      zip: investor.state# , files: investor.investors_files&.map(&:serializable_hash)
    }
  end
end
