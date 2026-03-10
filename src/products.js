export const products = [
  {
    id: 'organic-tomato',
    name: '有机番茄',
    price: 18.8,
    desc: '自然成熟，果肉饱满，适合沙拉与日常烹饪。',
    longDesc:
      '有机番茄采用绿色标准化种植，不使用高残留农药，色泽鲜亮、口感清甜，适合家庭日常烹饪和餐饮采购。',
    image:
      'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&w=900&q=80',
    stock: 128,
  },
  {
    id: 'mountain-lettuce',
    name: '高山生菜',
    price: 12.5,
    desc: '口感脆嫩，富含膳食纤维，安全无公害。',
    longDesc:
      '高山生菜生长于昼夜温差较大的高海拔环境，叶片脆嫩、清爽少苦味，适合轻食、火锅和团餐配菜。',
    image:
      'https://images.unsplash.com/photo-1622205313162-be1d5712a43c?auto=format&fit=crop&w=900&q=80',
    stock: 86,
  },
  {
    id: 'sweet-corn',
    name: '鲜食玉米',
    price: 9.9,
    desc: '颗粒饱满、清甜多汁，是家庭餐桌优选。',
    longDesc:
      '鲜食玉米精选优良品种，采摘后快速分拣与冷链配送，锁住自然甜味，适合蒸煮、烤制等多种做法。',
    image:
      'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80',
    stock: 240,
  },
  {
    id: 'premium-rice',
    name: '优质大米',
    price: 39.0,
    desc: '米粒均匀，蒸煮后软糯清香。',
    longDesc: '优质大米来自生态稻田，口感软糯清香，适合家庭与餐饮长期采购。',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31b?auto=format&fit=crop&w=900&q=80',
    stock: 60,
  },
  {
    id: 'baby-potato',
    name: '小土豆',
    price: 7.5,
    desc: '细腻粉糯，适合炖煮与焗烤。',
    longDesc: '精选小土豆表皮光滑、粉糯细腻，适合家庭炖菜与连锁餐饮标准化制作。',
    image:
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80',
    stock: 173,
  },
  {
    id: 'fresh-orange',
    name: '鲜甜橙子',
    price: 16.0,
    desc: '果汁丰富，酸甜平衡，维C充足。',
    longDesc: '鲜甜橙子果肉细腻、汁水充足，适合鲜食与榨汁，满足家庭健康饮食需求。',
    image:
      'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=80',
    stock: 95,
  },
]

export function findProductById(id) {
  return products.find((item) => item.id === id)
}
