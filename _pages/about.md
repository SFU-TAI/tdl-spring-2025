---
permalink: /
title: "CMPT 419/983 Trustworthy Deep Learning | Spring 2025 | Simon Fraser University"
barename: about
layout: default_main
redirect_from:
  - /about.html
---

Deep learning, represented by large language models, is revolutionizing human lives. However, trustworthiness threats in deep learning widely exist, posing great challenges to AI safety, security, and reliability. This course introduces state-of-the-art frontiers on deep learning research for a wide range of trustworthiness issues, including threat discovery, mitigation, and certification methods through seminar-style presentations and hands-on projects.

This is a seminar-style course for trustworthy deep learning. The first half of the course is an overview of deep learning and preliminaries for trustworthy AI methods, including training of neural networks, common neural network architectures, large language models, the definition of AI attacks, defences, and certification and verification in the context of AI. The second half of the course visits representative and recent research papers in the field through student presentations, covering topics like evasion attacks and defences, robustness certification, differential privacy, membership inference attacks, watermarks, detection of AI-generated contents, machine unlearning, prompt injection attacks, model stealing, and finetuning attacks. 

<h4 id='prerequisites'>Prerequisites <a href="#prerequisites">#</a></h4>

There is no formal pre-requisite. Background in algorithms, calculus, linear algebra (e.g., MATH 151, MATH 152, MATH 232, CMPT 225), CMPT 410/726 Machine Learning **strongly recommended**. It is also recommended to have background in CMPT 412/762 Computer Vision and CMPT 713 NLP.


<h4 id='textbook'>Textbook and Reading Materials <a href="#textbook">#</a></h4>

There is no primary reference material. We will read an assortment of research papers during lectures.

- [Deep Learning](https://www.deeplearningbook.org/){:target="_blank"} Book
  - By Ian Goodfellow, Yoshua Bengio, and Aaron Courville
  - Recommended for students to gain background in deep learning before taking the course.
- Online course [Intro to ML Safety](https://course.mlsafety.org/about){:target="_blank"}
  - By Dan Hendrycks at the Center for AI Safety
  - Optional, advanced reading for interested students
  - A well-developed course recommended for those who want to learn general machine learning safety from a systematic and interdisciplinary perspective.

<h4 id='grading'>Grading <a href='#grading'>#</a></h4>

<code>(Tentative)</code> 10% Homework 0 + 40% course project + 30% paper presentation + 20% from note of peer evaluation and summary

<h4 id='schedule'>Schedule and Syllabus <a href='#schedule'>#</a></h4>


*Slides will be updated as the term progresses. All slides are available in [this OneDrive folder](https://1sfu-my.sharepoint.com/:f:/g/personal/linyi_sfu_ca/Ek8hTSoodFpIgvg8y9oul3wBB3qXFXm5RY7U6yhIFXyDCg?e=iJnvy5){:target="_blank"}.*

<div id='schedule_table' markdown="1">

| Week                  | Date           | Topics (Tentative)                                           | Assignment & Due                                        | Reading |
| --------------------- | -------------- | ------------------------------------------------------------ | ------------------------------------------------------- | ------- |
| Week 1 (1/5 - 1/11)   | Tue (1/7) 2h   | (Lecture) Syllabus, Introduction to Deep Learning I          | Homework 0 Release                                      | TBA     |
|                       | Thur (1/9) 1h  | (Lecture) Introduction to Deep Learning II                   |                                                         | TBA     |
| Week 2 (1/12 - 1/18)  | Tue (1/14) 2h  | (Lecture) Vision Models; Language Models; Trustworthy Deep Learning Overview |                                                         | TBA     |
|                       | Thur (1/16) 1h | (Lecture) Robustness Threats in Deep Learning - Attacks      | Presentation Signing-up Sheet Release<br>Homework 0 Due | TBA     |
| Week 3 (1/19 - 1/25)  | Tue (1/21) 2h  | (Lecture) Robustness Threats in Deep Learning - Attacks      |                                                         | TBA     |
|                       | Thur (1/23) 1h | (Lecture) Robustness Threats in Deep Learning - Defenses     |                                                         | TBA     |
| Week 4 (1/26 - 2/1)   | Tue (1/28) 2h  | (Lecture) Robustness Threats in Deep Learning - Defenses     |                                                         | TBA     |
|                       | Thur (1/30) 1h | (Lecture) Robustness Threats in Deep Learning - Certification |                                                         | TBA     |
| Week 5 (2/2 - 2/8)    | Tue (2/4) 2h   | (Lecture) Robustness Threats in Deep Learning - Certification |                                                         | TBA     |
|                       | Thur (2/6) 1h  | (Lecture) Course Project Release                             | Course Project Release<br>Due: 2/11 Questions & Summary | TBA     |
| Week 6 (2/9 - 2/15)   | Tue (2/11) 2h  | (Presentation) Deep Learning Privacy I - Differential Privacy |                                                         | TBA     |
|                       | Thur (2/13) 1h | (Presentation) Deep Learning Privacy II - Membership Inference Attacks | Due: 2/15 Peer Evaluation & Summary                     | TBA     |
| Week 7 (2/16 - 2/22)  | Reading Break  |                                                              |                                                         | TBA     |
| Week 8 (2/23 - 3/1)   | Tue (2/25) 2h  | (Presentation) Deep Learning Privacy III - Machine Unlearning & Watermarking |                                                         | TBA     |
|                       | Thur (2/27) 1h | *Course cancelled*                                           | Due: 3/1 Peer Evaluation & Summary                      |         |
| Week 9 (3/2 - 3/8)    | Tue (3/4) 2h   | (Presentation) Deep Learning Privacy V - Model Stealing      |                                                         | TBA     |
|                       | Thur (3/6) 1h  | (Presentation) Deep Learning Privacy VI - Data Stealing      | Due: 3/8 Peer Evaluation & Summary                      | TBA     |
| Week 10 (3/9 - 3/15)  | Tue (3/11) 2h  | (Lecture) Large Language Models - Recap                      |                                                         | TBA     |
|                       | Thur (3/13) 1h | (Lecture) LLM Trustworthiness Overview                       | Due: 3/15 Peer Evaluation & Summary                     | TBA     |
| Week 11 (3/16 - 3/22) | Tue (3/18) 2h  | (Presentation) LLM Alignment Tuning - I                      |                                                         | TBA     |
|                       | Thur (3/20) 1h | (Presentation) LLM Alignment Tuning - II                     | Due: 3/22 Peer Evaluation & Summary                     | TBA     |
| Week 12 (3/23 - 3/29) | Tue (3/25) 2h  | (Presentation) LLM Prompt Injection - I                      |                                                         | TBA     |
|                       | Thur (3/27) 1h | (Presentation) LLM Prompt Injection - II                     | Due: 3/29 Peer Evaluation & Summary                     | TBA     |
| Week 13 (3/30 - 4/5)  | Tue (4/1) 2h   | (Presentation) LLM Finetuning Attacks - I                    |                                                         | TBA     |
|                       | Thur (4/3) 1h  | (Presentation) LLM Finetuning Attacks - II                   | Due: 4/5 Peer Evaluation & Summary                      | TBA     |
| Week 14 (4/6 - 4/12)  | Tue (4/8) 2h   | (Interactive Lecture) Course Project Discussion, Closing Remarks |                                                         | TBA     |
| Week 15 (4/13-4/19)   | Fri (4/19)     | Grade Released                                               |                                                         | TBA     |

</div>

<h4 id='ext'>Extended Topics <a href='#ext'>#</a></h4>

*Trustworthy deep learning is a broad area. Some important topics are not covered in lectures and presentations due to the limited time frame. Some of them are listed below.*

- Data Poisoning Attacks and Defenses
- LLM Hallucination
- Social-economic Impact with Generative AI
- ...

<h4 id='projects'>Assignments and Project <a href='#projects'>#</a></h4>

- Homework 0: `TBA`
- Course Project: `TBA`
- Presentation Signing-up Sheet: `TBA`
- Note Submission: `TBA`


<h4 id='info'>Information Platform <a href='#info'>#</a></h4>

- Course website (here)
- CourSys and Canvas: `TBA`
- Piazza: `TBA`
- Syllabus link: `TBA`

<h4 id='ethics'>Ethics Statement <a href='#ethics'>#</a></h4>

This course will include topics related computer security and privacy. As part of this investigation we may cover technologies whose abuse could infringe on the rights of others. As computer scientists, we rely on the ethical use of these technologies. Unethical use includes circumvention of an existing security or privacy mechanisms for any purpose, or the dissemination, promotion, or exploitation of vulnerabilities of these services. Any activity outside the letter or spirit of these guidelines will be reported to the proper authorities and may result in dismissal from the class and possibly more severe academic and legal sanctions.

<h4 id='integrity'>Academic Integrity Policy <a href='#integrity'>#</a></h4>

- Some examples of unacceptable behaviour in homeworks and course projects:
  - Handing in assignments that are not 100% your own work (in design, implementation, wording, etc.), without proper citation. There must be a README file in your submission with citations to any external code used.
  - Sharing code fragments with others in class (for group project, with others who are not in the same group) is not allowed.
  - Keep discussions to high level information rather than specific code hints.
  - Copying and then obfuscating code is a serious academic honesty violation.
  - Submitting work that has been submitted before, for any course at any institution.
- If you are unclear on what academic honesty is, see <a href="https://www.sfu.ca/policies/gazette/student/s10-01.html" target="_blank">Simon Fraser University’s Policy S10-01</a>.
- All instances of academic dishonesty will be dealt with very severely.
- In general, minimum requested penalties will be as follows:
  - For assignments and course projcets: a mark of -50% on the assignment. So, academic dishonesty on an assignment worth 10% of your final mark will result in a zero on the assignment, and a penalty of 5% from your final grade.
- Please note that these are minimum penalties. At the instructor’s option, more severe penalties may be given/requested. All instances of academic dishonesty will be noted on your University record.
- The instructor may use an automated service that will check for plagiarism.

<h4 id='ack'>Acknowledgement <a href='#ack'>#</a></h4>

The course is developed from [CS562](https://aisecure.github.io/TEACHING/CS562/CS562.html){:target="_blank"} and [CS598GS](https://ggndpsngh.github.io/teaching/2021-fall-lai/){:target="_blank"} at UIUC. Part of the content is adapted from [Intro to ML Safety](https://course.mlsafety.org/about){:target="_blank"}. Some course policies are developed from [CMPT 413 Natural Language Processing](https://angelxuanchang.github.io/nlp-class/index.html){:target="_blank"}.
