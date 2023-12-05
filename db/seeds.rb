9.times do |i|
  Recipe.create(
    name: "Recipe #{i + 1}",
    ingredients: '227g tub clotted cream, 25g butter, 1 tsp cornflour,100g parmesan, grated nutmeg, 250g fresh fettuccine or tagliatelle, snipped chives or chopped parsley to serve (optional)',
    instruction: 'In a medium saucepan, stir the clotted cream, butter, and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm.',
    image: 'https://th.bing.com/th/id/R.6bee8b3b8a1d49225a7985a3ed7f5924?rik=ySYCpSTG9S7oxA&pid=ImgRaw&r=0'
  )
end

puts '9 recipes created!'