import { Header } from '@/components/Header';
import { SummaryCards } from '@/components/SummaryCards';
import { UniversityTable } from '@/components/UniversityTable';
import { universities } from '@/data/universities';

export default function Home() {
  return (
    <main><Header/><div className="shell main-content"><SummaryCards universities={universities}/><UniversityTable universities={universities}/><footer><strong>Enfermagem SP</strong><p>Uma ferramenta independente para decisões mais informadas.</p><span>Dados acadêmicos pendentes serão atualizados somente após confirmação oficial.</span></footer></div>
    </main>
  );
}
