class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.integer :realtor_id
      t.string :main_img
      t.string :neighborhood
      t.string :address
      t.integer :listing_price
      t.integer :beds
      t.integer :baths
      t.string :description
      t.boolean :featured
    end
  end
end
