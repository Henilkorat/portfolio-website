export default function HireStats({ value, label }) {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
