import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function HomePage() {
  const { data: tenants, error } = await supabase.from('tenants').select('*');

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '50px', direction: 'rtl' }}>
      <h1>نظام "حسابات" المحاسبي السحابي 🚀</h1>
      <p>مرحباً بك في لوحة تحكم النظام المتكامل.</p>

      <div style={{ marginTop: '30px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h3>الحسابات والمستأجرين المسجلين:</h3>
        {error ? (
          <p style={{ color: 'red' }}>خطأ في الاتصال بقاعدة البيانات: {error.message}</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tenants && tenants.map((tenant) => (
              <li key={tenant.id} style={{ margin: '10px 0', fontWeight: 'bold' }}>
                {tenant.full_name} ({tenant.email}) - الحالة: {tenant.status}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
