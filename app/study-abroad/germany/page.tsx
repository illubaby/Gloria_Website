import React from 'react';
import CountryDetailTemplate from '../CountryDetailTemplate';

export default function GermanyPage() {
  return (
    <CountryDetailTemplate
      countryName="Đức"
      introduction="Đức sở hữu nền giáo dục được đánh giá cao, tập trung vào sự kết hợp linh hoạt giữa lý thuyết và thực hành."
      reasonsToStudy="Các trường đại học hàng đầu và cơ hội trau dồi ngoại ngữ, cùng với chính sách học phí hợp lý."
      scholarshipInfo="Các tổ chức như DAAD cung cấp nhiều loại học bổng, hỗ trợ tài chính cho sinh viên quốc tế."
      additionalInfo="Chi phí sinh hoạt tương đối phải chăng, văn hóa đa dạng, và hệ thống giao thông công cộng hiện đại."
    />
  );
}