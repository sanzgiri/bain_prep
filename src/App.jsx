import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BainPrepCalendar() {
  const [day, setDay] = useState(1);

  const plan = [
    {
      title: 'Day 1 – Foundation: Arithmetic & Logic Basics',
      focus: 'Build accuracy and speed on percentages, ratios, averages, and pattern recognition.',
      drills: [
        { label: 'Numerical Practice Set', url: 'https://www.assessmentday.co.uk/numerical-reasoning-test.htm' },
        { label: 'Logic Pattern Practice', url: 'https://www.practiceaptitudetests.com/numerical-reasoning-tests/' },
        { label: 'Mental Math Drills (10-min)', url: 'https://www.mathtrainer.org/' }
      ],
      tip: 'Focus on estimation and mental calculation — speed matters more than long arithmetic.'
    },
    {
      title: 'Day 2 – Data Interpretation & Graph Reading',
      focus: 'Interpret charts, tables, and trends similar to Bain’s case-style data questions.',
      drills: [
        { label: 'GMAT Integrated Reasoning Sample', url: 'https://www.mba.com/exam-prep/gmat-official-guide' },
        { label: 'Chart/Table Analysis Test', url: 'https://www.practiceaptitudetests.com/information-interpretation-tests/' },
        { label: 'Mini Drill: Create your own chart and summarize 3 insights in 3 minutes', url: '#' }
      ],
      tip: 'Train to skim for key numbers: % change, biggest driver, ratio comparisons.'
    },
    {
      title: 'Day 3 – Business Acumen & Mini Case Logic',
      focus: 'Strengthen reasoning with business-focused logic scenarios.',
      drills: [
        { label: 'Business Situation Practice', url: 'https://www.jobtestprep.com/situational-judgement-test' },
        { label: 'Profitability Mini-Cases', url: 'https://mconsultingprep.com/problem-solving-test/' },
        { label: 'Quick Review: Bain case interview insights', url: 'https://www.bain.com/careers/interview-prep/' }
      ],
      tip: 'Focus on cause-effect logic: price ↓ vs. cost ↑ vs. volume ↓ — know how each affects margin.'
    },
    {
      title: 'Day 4 – Mixed Simulation Test',
      focus: 'Timed, adaptive-style test combining all question areas.',
      drills: [
        { label: 'Take Full Mock Test (45 min)', url: 'https://www.practiceaptitudetests.com/' },
        { label: 'Simulate with your custom Bain Practice App', url: '#' },
        { label: 'Review all mistakes — log why each error occurred', url: '#' }
      ],
      tip: 'Replicate test conditions: quiet space, strict timer, no calculator (if not allowed).'
    }
  ];

  const current = plan[day - 1];

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">Bain TestGorilla 4-Day Prep Calendar</h1>
      <div className="flex justify-center gap-2 mt-2">
        {plan.map((_, i) => (
          <Button key={i} onClick={() => setDay(i + 1)} variant={day === i + 1 ? 'default' : 'outline'}>
            Day {i + 1}
          </Button>
        ))}
      </div>

      <Card className="p-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-1">{current.title}</h2>
          <p className="text-sm mb-3 text-gray-600">{current.focus}</p>
          <ul className="list-disc ml-6 space-y-2">
            {current.drills.map((d, i) => (
              <li key={i}>
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{d.label}</a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm italic">💡 {current.tip}</p>
        </CardContent>
      </Card>
    </div>
  );
}
