class AddInvestorsFilesTable < ActiveRecord::Migration[8.0]
  def up
      create_table :investors_files do |t|
      t.string :file_name, null: false
      t.integer :file_size
      t.references :investors, foreign_key: true
      t.timestamps
    end
  end
  def down
    drop_table :investors_files
  end
end
