
export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  imageUrl: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Phở Bò Truyền Thống",
    description: "Món phở bò truyền thống với nước dùng ngọt thanh từ xương bò và các loại gia vị đặc trưng, ăn kèm với các loại rau thơm và gia vị.",
    ingredients: [
      "1kg xương bò",
      "500g bắp bò",
      "300g thăn bò",
      "2 củ hành tây",
      "1 củ gừng",
      "5 cây hoa hồi",
      "3 quả thảo quả",
      "1 thanh quế",
      "Hoa hồi, đinh hương",
      "Hành lá, rau mùi",
      "Bánh phở tươi",
      "Giá đỗ, chanh, ớt"
    ],
    instructions: [
      "Xương bò rửa sạch, trần qua nước sôi, vớt ra rửa lại.",
      "Cho xương vào nồi, đổ ngập nước, ninh trong 3 tiếng với lửa nhỏ.",
      "Hành tây, gừng nướng chín, cho vào nồi nước dùng.",
      "Hoa hồi, đinh hương, thảo quả, quế cho vào túi vải, thả vào nồi nước dùng.",
      "Bắp bò luộc chín, thái mỏng.",
      "Thăn bò thái mỏng (để sống).",
      "Bánh phở trần qua nước sôi.",
      "Cho bánh phở vào tô, xếp thịt bò lên trên, chan nước dùng.",
      "Thêm hành lá, rau mùi, ăn kèm với giá đỗ, chanh, ớt."
    ],
    prepTime: 30,
    cookTime: 180,
    servings: 6,
    imageUrl: "https://images.unsplash.com/photo-1618870372208-9e654062602e?q=80&w=1000"
  },
  {
    id: 2,
    title: "Bánh Mì Thịt Nướng",
    description: "Bánh mì giòn, kết hợp với thịt heo nướng thơm lừng, dưa chua và các loại rau sống tạo nên hương vị đặc trưng của ẩm thực Việt Nam.",
    ingredients: [
      "500g thịt vai heo",
      "2 muỗng canh nước mắm",
      "1 muỗng canh đường",
      "2 tép tỏi băm",
      "1/2 muỗng cà phê ngũ vị hương",
      "1 muỗng cà phê dầu hào",
      "6 ổ bánh mì",
      "1 củ cà rốt",
      "1 củ cải trắng",
      "Dưa leo, ngò, rau răm",
      "Mayonnaise, tương ớt"
    ],
    instructions: [
      "Thịt heo thái lát mỏng, ướp với nước mắm, đường, tỏi băm, ngũ vị hương, dầu hào trong 2 giờ.",
      "Cà rốt, củ cải thái sợi, ngâm với giấm đường làm dưa chua.",
      "Nướng thịt heo trên bếp than hoặc lò nướng đến khi chín vàng.",
      "Cắt bánh mì, phết một lớp mayonnaise và tương ớt.",
      "Xếp thịt nướng, dưa chua và rau sống vào bánh mì.",
      "Thưởng thức bánh mì khi còn nóng."
    ],
    prepTime: 120,
    cookTime: 15,
    servings: 6,
    imageUrl: "https://images.unsplash.com/photo-1600454309733-9dacbcd7dfb8?q=80&w=1000"
  },
  {
    id: 3,
    title: "Gỏi Cuốn Tôm Thịt",
    description: "Món gỏi cuốn tươi mát với tôm, thịt heo, bún và rau sống cuốn trong bánh tráng, chấm với nước tương pha đậu phộng.",
    ingredients: [
      "200g tôm sú",
      "200g thịt ba chỉ",
      "100g bún",
      "1 bìa đậu hũ",
      "Rau xà lách, húng quế, húng lủi",
      "Giá đỗ",
      "Bánh tráng",
      "Đậu phộng rang",
      "Nước mắm, đường, tỏi, ớt"
    ],
    instructions: [
      "Tôm luộc chín, bóc vỏ, chẻ đôi theo lưng.",
      "Thịt ba chỉ luộc chín, thái lát mỏng.",
      "Bún trụng qua nước sôi, để ráo.",
      "Đậu hũ chiên vàng, thái sợi.",
      "Chuẩn bị rau sống, giá đỗ.",
      "Nhúng bánh tráng vào nước, đặt lên mặt phẳng.",
      "Xếp xà lách, bún, giá, rau thơm, thịt, tôm lên bánh tráng.",
      "Cuộn chặt bánh tráng lại.",
      "Pha nước chấm với nước mắm, đường, tỏi, ớt, đậu phộng rang giã nhỏ."
    ],
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?q=80&w=1000"
  },
  {
    id: 4,
    title: "Bún Chả Hà Nội",
    description: "Món bún chả truyền thống của Hà Nội với thịt viên và thịt nướng thơm lừng, ăn kèm bún và rau sống chấm nước mắm chua ngọt.",
    ingredients: [
      "500g thịt vai heo",
      "500g thịt ba chỉ",
      "2 muỗng canh nước mắm",
      "1 muỗng canh đường",
      "2 tép tỏi băm",
      "1 củ hành khô băm",
      "1 muỗng cà phê hạt tiêu",
      "500g bún tươi",
      "Rau sống các loại",
      "Nước mắm, đường, chanh, ớt"
    ],
    instructions: [
      "Thịt vai xay nhuyễn, ướp với nước mắm, đường, tỏi, hành, tiêu. Vo viên nhỏ.",
      "Thịt ba chỉ thái miếng vừa, ướp cùng gia vị.",
      "Nướng thịt viên và thịt ba chỉ trên bếp than đến khi vàng đều.",
      "Pha nước chấm chua ngọt với nước mắm, đường, nước cốt chanh, tỏi, ớt.",
      "Cho thịt nướng vào bát, chan nước chấm lên trên.",
      "Bún trụng qua nước sôi, để ráo.",
      "Thưởng thức bún chả với rau sống các loại."
    ],
    prepTime: 30,
    cookTime: 20,
    servings: 5,
    imageUrl: "https://images.unsplash.com/photo-1627308595260-6fad84c90baa?q=80&w=1000"
  },
  {
    id: 5,
    title: "Cơm Tấm Sườn Bì Chả",
    description: "Món cơm tấm đặc trưng của Sài Gòn với sườn nướng, bì heo và chả trứng, ăn kèm với nước mắm ngọt và đồ chua.",
    ingredients: [
      "500g gạo tấm",
      "500g sườn non",
      "200g thịt heo vai",
      "100g bì heo",
      "3 trứng gà",
      "2 muỗng canh nước mắm",
      "1 muỗng canh đường",
      "Hành tím, tỏi băm",
      "Mỡ hành",
      "Đồ chua (cà rốt, củ cải)",
      "Dưa leo, cà chua",
      "Nước mắm, đường, chanh, ớt"
    ],
    instructions: [
      "Gạo tấm vo sạch, nấu chín.",
      "Sườn non ướp với nước mắm, đường, hành tỏi băm, nướng chín.",
      "Thịt heo xay trộn với nấm mèo, hành tím băm, trứng gà, hấp chín.",
      "Bì heo luộc chín, thái sợi, trộn với mè rang.",
      "Pha nước mắm chua ngọt.",
      "Xếp cơm tấm ra đĩa, thêm sườn nướng, bì heo, chả trứng.",
      "Rưới mỡ hành lên trên, ăn kèm với đồ chua, dưa leo, cà chua và nước mắm."
    ],
    prepTime: 30,
    cookTime: 40,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1569058242272-4a036357c0ed?q=80&w=1000"
  },
  {
    id: 6,
    title: "Chả Giò",
    description: "Món chả giò giòn rụm với nhân thịt, nấm, miến và rau củ, ăn kèm với nước mắm chua ngọt.",
    ingredients: [
      "300g thịt heo xay",
      "100g nấm mèo",
      "100g miến",
      "2 củ cà rốt",
      "1 củ hành tây",
      "2 tép tỏi băm",
      "1 quả trứng gà",
      "Bánh tráng",
      "Dầu ăn",
      "Nước mắm, đường, chanh, ớt"
    ],
    instructions: [
      "Miến ngâm nước ấm, cắt ngắn.",
      "Nấm mèo ngâm nở, thái nhỏ.",
      "Cà rốt, hành tây thái sợi nhỏ.",
      "Trộn thịt xay, miến, nấm, cà rốt, hành tây, tỏi băm, trứng gà.",
      "Nhúng bánh tráng vào nước, đặt lên mặt phẳng.",
      "Cho nhân lên bánh tráng, cuốn chặt.",
      "Chiên chả giò trong dầu nóng đến khi vàng đều.",
      "Pha nước chấm chua ngọt với nước mắm, đường, nước cốt chanh, tỏi, ớt."
    ],
    prepTime: 25,
    cookTime: 15,
    servings: 6,
    imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1000"
  }
];
