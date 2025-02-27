import { Mail, Phone, MapPin } from "lucide-react"; 

const About = () => {
  return (
    <ul className="min-h-screen">
      <div className="flex justify-center">
        <div className="max-w-md rounded-lg p-6 shadow-xl hover:shadow-xl bg-white">
          {/* รูปโปรไฟล์ */}
          <img src="/images/avatar.jpg" alt="avatar" className="w-24 h-24 rounded-full mx-auto border border-gray-300" />

          {/* ชื่อ */}
          <h1 className="text-black text-2xl font-bold mt-3 text-center">Apiwat Naemsai</h1>

          {/* ข้อมูลติดต่อ */}
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <p className="flex items-center text-gray-800 text-sm mt-2">
              <Mail className="w-5 h-5 text-blue-600 mr-2" /> 654234012@parichat.skru.ac.th
            </p>
            <p className="flex items-center text-gray-800 text-sm mt-6">
              <Phone className="w-5 h-5 text-blue-600 mr-2" /> 064 1xx xxxx 
            </p>
            <p className="flex items-center text-gray-800 text-sm mt-6">
              <MapPin className="w-12 h-12 text-blue-600 mr-2" /> คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏสงขลา 160 หมู่ 4 ถนนกาญจนวนิช ตำบลเขารูปช้าง อำเภอเมืองสงขลา จังหวัดสงขลา 90000
            </p>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default About;
