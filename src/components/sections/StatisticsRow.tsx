const stats = [
  { number: "40+", label: "Years of Industry Experience" },
  { number: "800+", label: "Machines Manufactured" },
  { number: "6+", label: "Events & Exhibitions" },
  { number: "2+", label: "Awards & Recognitions" },
]

export function StatisticsRow() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-extrabold text-[#0047AB] mb-2">
                {stat.number}
              </div>
              <div className="text-sm uppercase tracking-wide text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
