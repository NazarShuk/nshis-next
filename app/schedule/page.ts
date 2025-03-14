import { redirect } from 'next/navigation';

export default function RedirectPage() {
  redirect('https://schedule.nshis.com/'); // Replace with your target path

  return null; // This will never be reached
}
