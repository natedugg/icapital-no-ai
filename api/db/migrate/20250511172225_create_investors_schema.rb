class CreateInvestorsSchema < ActiveRecord::Migration[8.0]
  def up
    create_table :investors do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :date_of_birth, null: false
      t.string :phone, null: false
      t.string :address_1, null: false
      t.string :address_2
      t.string :state, size: 2, null: false
      t.string :zip, null: false
      t.timestamps
    end
  end

  def down
    drop_table :investors
  end
end
