class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.column  :client, :string
      t.column :content, :string
    end
  end
end
