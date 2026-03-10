import { BrowserRouter, Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { findProductById, products } from './products'

function ProductListPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">农产品列表</h1>
          <p className="mt-3 text-gray-600">精选新鲜、安全、健康的农产品，点击卡片查看详情。</p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    ¥{product.price.toFixed(2)}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">{product.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

function ProductDetailPage() {
  const { id } = useParams()
  const product = findProductById(id)

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 text-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">产品不存在</h1>
          <p className="mt-2 text-gray-600">请返回产品列表重新选择。</p>
          <Link to="/products" className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 font-medium text-white">
            返回产品列表
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          ← 返回产品列表
        </Link>

        <div className="mt-6 grid gap-8 rounded-2xl border border-gray-100 p-6 shadow-sm md:grid-cols-2 md:p-8">
          <img
            src={product.image}
            alt={product.name}
            className="h-80 w-full rounded-xl object-cover lg:h-[520px]"
          />

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{product.name}</h1>
            <p className="mt-4 text-3xl font-semibold text-green-700">¥{product.price.toFixed(2)}</p>
            <p className="mt-4 text-base leading-7 text-gray-700">{product.longDesc}</p>

            <div className="mt-6 rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">库存</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{product.stock} 件</p>
            </div>

            <button className="mt-6 w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-green-700 md:w-auto">
              立即购买
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
