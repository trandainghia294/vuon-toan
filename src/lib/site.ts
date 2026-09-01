export const SITE_NAME = 'Vườn Toán';
export const SITE_DESCRIPTION = 'Nơi gieo bài toán, nuôi dưỡng cách nghĩ và lưu lại những lời giải đẹp.';

export const withBase = (path = '') => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\//, '')}`;
};

export const sectionLabels = {
  'hat-giong': 'Hạt giống',
  'loi-giai-dep': 'Lời giải đẹp',
  'cay-chuyen-de': 'Cây chuyên đề',
  'nha-kinh': 'Nhà kính'
} as const;

export const audienceLabels = {
  'hoc-sinh': 'Học sinh',
  'giao-vien': 'Giáo viên',
  'nghien-cuu': 'Nghiên cứu'
} as const;

export const difficultyLabels = {
  'co-ban': 'Cơ bản',
  'van-dung': 'Vận dụng',
  'nang-cao': 'Nâng cao'
} as const;

export const formatDate = (date: Date) => new Intl.DateTimeFormat('vi-VN', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
}).format(date);
