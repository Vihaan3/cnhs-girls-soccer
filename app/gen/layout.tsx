export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden items-start"> 
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">{children}</div>
      </div>
    </div>
  );
}