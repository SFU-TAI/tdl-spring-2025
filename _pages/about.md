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

There is no formal pre-requisite. Background in algorithms, calculus, linear algebra (e.g., MATH 151, MATH 152, MATH 232, CMPT 225), CMPT 410/726 Machine Learning **strongly recommended**. It is also recommended to have a background in CMPT 412/762 Computer Vision and CMPT 713 NLP.

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

10% Homework 0 (raw score) + 40% course project (1.1 × raw score with no cap)  + 30% paper presentation + 20% notes of peer evaluation and summary

<h4 id='schedule'>Schedule and Syllabus <a href='#schedule'>#</a></h4>

[Syllabus](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/EZnYhyYIANdPndmwYN1855EBevvjiS9gxOcM7fCfrgHDFQ?e=raqrmk)

*Slides will be updated as the term progresses. All slides are available in [this OneDrive folder](https://1sfu-my.sharepoint.com/:f:/g/personal/linyi_sfu_ca/Ek8hTSoodFpIgvg8y9oul3wBB3qXFXm5RY7U6yhIFXyDCg?e=iJnvy5){:target="_blank"}. The slides are password encrypted - password posted on [Canvas](https://canvas.sfu.ca/courses/88687).*

<div id='schedule_table' markdown="1">

| Week                  | Date           | Topics (Tentative)                                           | Assignment & Due                                        | Reading |
| --------------------- | -------------- | ------------------------------------------------------------ | ------------------------------------------------------- | ------- |
| Week 1 (1/5 - 1/11)   | Tue (1/7) 2h   | (Lecture) [Syllabus, Introduction to Deep Learning I, Homework 0 Explained](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/EWZHYbIfrXdFkmvGH4zEqDwBmyxnuB6A2VhetZ83UWmCLQ?e=U3dSaA)         | Homework 0 Release                                      | See References in slides     |
|                       | Thur (1/9) 1h  | (Lecture) [Introduction to Deep Learning II](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/EeXX-lAJ_SdKna9m7WIXwy0B5I2PQ2nJPY2fmKT1a1id4g?e=gurIS4) |                                                         | See References in Slides |
| Week 2 (1/12 - 1/18)  | Tue (1/14) 2h  | (Lecture) [Introduction to Deep Learning III](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/ESkHHCjfuDxIpzS8-pdoCp0B-SdOYccM2wtugDVhX8MG_w?e=j1SWzb) |                                                         | See References in Slides     |
|                       | Thur (1/16) 1h | (Lecture) [Course Presentation Instructions; Trustworthy Deep Learning Overview](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/EWXYhwIVinxBrbBFYjuJm5MBY7TrtvTHxvkbAXVEqzsi1w?e=rjF3ht) | Presentation Signing-up Sheet Release<br>Homework 0 Due (1/18) | See References in Slides     |
| Week 3 (1/19 - 1/25)  | Tue (1/21) 2h  | (Lecture) [Robustness Threats in Deep Learning - Attacks I](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/ESqQK5e2LbxMgbtmfLprWIkB_R8XjImwpsUx5MRtc8G2uw?e=yeXtAo)     |                                                         | See References in Slides     |
|                       | Thur (1/23) 1h | (Lecture) [Robustness Threats in Deep Learning - Attacks II](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/EfJwpfyFPQ9MrAoEuJPtZzQB0XWO07YLmqpvnTGqJFHELQ?e=eNt0al)    |                                                         | See References in Slides     |
| Week 4 (1/26 - 2/1)   | Tue (1/28) 2h  | (Lecture) [Robustness Threats in Deep Learning - Defenses](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/EbDvWSPtn2FGsGR4jBec13oBVPQRxkvUoOfyyqwswZZgtw?e=PyVeVR)     |                                                         | See References in Slides     |
|                       | Thur (1/30) 1h | (Lecture) [Robustness Threats in Deep Learning - Certification I](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/EfcE9iv11hVNo-Ik3QmZXywBAd3pINpdb7wrR1QINQ7zwA?e=uGwLec) |                                                         | See References in Slides     |
| Week 5 (2/2 - 2/8)    | Tue (2/4) 2h   | *Class cancelled* |                                                         |     |
|                       | Thur (2/6) 1h  | (Lecture) [Robustness Threats in Deep Learning - Certification I (Cont.d) & II](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/ERDinh4SzOdNtsvtsZ9k1scBEk-YsGNE2CTxAMicM8_esw?e=uvC5fy)  | Presentation Signing-up Due (2/8) | See References in Slides     |
| Week 6 (2/9 - 2/15)   | Tue (2/11) 2h  | (Lecture) [Robustness Threats in Deep Learning - Certification II (Cont.d)](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/EaC4lygxllVDstN64PAB8z8BcM9LC074XE5Jua6TzOiofQ?e=DPditz) | Course Project Release        | See References in Slides |
|                       | Thur (2/13) 1h | (Presentation) **Privacy Attacks**<br>[Membership Inference Attacks Against Machine Learning Models](https://arxiv.org/abs/1610.05820) (35 min presentation). | Notes Submission Required | [1802.08232](https://arxiv.org/abs/1802.08232)<br/>[1702.07464](https://arxiv.org/abs/1702.07464) |
| Week 7 (2/16 - 2/22)  | Reading Break  |                                                              |                                                         |      |
| Week 8 (2/23 - 3/1)   | Tue (2/25) 2h  | (Presentation) **Privacy Attacks & Differential Privacy**<br>[Deep Leakage from Gradients](https://arxiv.org/abs/1906.08935) (15 min presentation).<br>[Differentially Private Synthetic Data via Foundation Model APIs 1: Images](https://arxiv.org/abs/2305.15560) & [Differentially Private Synthetic Data via Foundation Model APIs 2: Text](https://arxiv.org/abs/2403.01749) (35 min presentation)<br>[Flocks of Stochastic Parrots: Differentially Private Prompt Learning for Large Language Models](https://arxiv.org/abs/2305.15594) (15 min presentation). | Notes Submission Required | [2301.13188](https://arxiv.org/abs/2301.13188)<br/>[2404.17399](https://arxiv.org/abs/2404.17399)<br/>[2112.03570](https://arxiv.org/abs/2112.03570)<br/>[2202.07646](https://arxiv.org/abs/2202.07646)<br/>[2302.00539](https://arxiv.org/abs/2302.00539)<br/>[1607.00133](https://arxiv.org/abs/1607.00133)<br/>[1702.07476](https://arxiv.org/abs/1702.07476)<br/>[2106.02848](https://arxiv.org/abs/2106.02848)<br/>[1610.05755](https://arxiv.org/abs/1610.05755)<br/>[1805.10559](https://arxiv.org/abs/1805.10559)<br/>[1802.08908](https://arxiv.org/abs/1802.08908)<br/>[2110.06500](https://arxiv.org/abs/2110.06500)<br/>[2110.05679](https://arxiv.org/abs/2110.05679)<br/>[2212.06470](https://arxiv.org/abs/2212.06470)<br/>[2205.10683](https://arxiv.org/abs/2205.10683) |
|                       | Thur (2/27) 1h | *Class cancelled*                                           |                       |         |
| Week 9 (3/2 - 3/8)    | Tue (3/4) 2h   | (Presentation) **Copyright, Unlearning, Model Stealing**<br>[Machine Unlearning](https://arxiv.org/abs/1912.03817) (35 min presentation).<br>[Protecting Artists from Style Mimicry by Text-to-Image Models](https://arxiv.org/abs/2302.04222) (25 min presentation).<br>[Extracting Training Data from Large Language Models](https://arxiv.org/abs/2012.07805) (25 min presentation). | Notes Submission Required | [Towards Making Systems Forget with Machine Unlearning](https://ieeexplore.ieee.org/abstract/document/7163042)<br/>[2109.13398](https://arxiv.org/abs/2109.13398)<br/>[2403.06634](https://arxiv.org/abs/2403.06634)<br/>[2404.03233](https://arxiv.org/abs/2404.03233)<br/>[1911.03030](https://arxiv.org/abs/1911.03030)<br/>[2303.07345](https://arxiv.org/abs/2303.07345) |
|                       | Thur (3/6) 1h  | (Presentation) **Fairness**<br>[A Survey on Bias and Fairness in Machine Learning](https://arxiv.org/abs/1908.09635) (35 min presentation). | Notes Submission Required | [1906.08386](https://arxiv.org/abs/1906.08386)<br/>[2205.15494](https://arxiv.org/abs/2205.15494)<br/>[2002.10312](https://arxiv.org/abs/2002.10312) |
| Week 10 (3/9 - 3/15)  | Tue (3/11) 2h  | (Presentation) **Data Poisoning Attacks, Fairness**<br>[Fairness Without Demographics in Repeated Loss Minimization](https://arxiv.org/abs/1806.08010) (15 min presentation).<br>(Lecture) [Poisoning & Backdoor Attacks for Deep Neural Networks](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/EStB1MBEGF5AkaAM8KRXnPcBYK7vFO2qY9OAiwEayiTEKg?e=z2DH80) | Notes Submission Required | [1804.00792](https://arxiv.org/abs/1804.00792)<br/>[2302.10149](https://arxiv.org/abs/2302.10149)<br/>[Trojaning Attack on Neural Networks](https://www.ndss-symposium.org/wp-content/uploads/2018/02/ndss2018_03A-5_Liu_paper.pdf)<br/>[Robust Logistic Regression and Classification](http://papers.neurips.cc/paper/5515-robust-logistic-regression-and-classification.pdf)<br/>[1706.03691](https://arxiv.org/abs/1706.03691)<br/>[Neural Cleanse: Identifying and Mitigating Backdoor Attacks in Neural Networks](https://ieeexplore.ieee.org/document/8835365)<br/>[2006.14768](https://arxiv.org/abs/2006.14768)<br/>[Exploring the Orthogonality and Linearity of Backdoor Attacks](https://kaiyuanzhang.com/publications/SP24_Backdoor.pdf) |
|                       | Thur (3/13) 1h | (Presentation) **Data Valuation**<br>[Towards Efficient Data Valuation Based on the Shapley Value](https://arxiv.org/abs/1902.10275) (15 min presentation).<br>[Studying Large Language Model Generalization with Influence Functions](https://arxiv.org/abs/2308.03296) (15 min presentation). | Notes Submission Required | [Data Shapley: Equitable Valuation of Data for Machine Learning](https://proceedings.mlr.press/v97/ghorbani19c.html)<br/>[1703.04730](https://arxiv.org/abs/1703.04730) |
| Week 11 (3/16 - 3/22) | Tue (3/18) 2h  | (Lecture) Large Language Models and Foundation Models: Overview and Frontiers |                                                         | TBA     |
|                       | Thur (3/20) 1h | (Lecture) LLM Trustworthiness Overview |                      | [DecodingTrust: A Comprehensive Assessment of Trustworthiness in GPT Models](https://arxiv.org/abs/2306.11698)<br>[AI Risk Management Should Incorporate Both Safety and Security](https://arxiv.org/abs/2405.19524)<br>[Recommendations for Technical AI Safety Research Directions](https://alignment.anthropic.com/2025/recommended-directions/) |
| Week 12 (3/23 - 3/29) | Tue (3/25) 2h  | (Presentation) **LLM Alignment Tuning**<br>[Training Language Models to Follow Instructions with Human Feedback](https://arxiv.org/abs/2203.02155) (25 min presentation).<br>[Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2204.05862) (25 min presentation).<br>[Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations](https://arxiv.org/abs/2312.06674) (25 min presentation).<br>[SimPO: Simple Preference Optimization with a Reference-Free Reward](https://arxiv.org/abs/2405.14734) (15 min presentation). | Notes Submission Required | [2305.18290](https://arxiv.org/abs/2305.18290)<br/>[Safety Alignment Should be Made More Than Just a Few Tokens Deep](https://openreview.net/forum?id=6Mxhg9PtDE)<br/>[2404.12358](https://arxiv.org/abs/2404.12358)<br/>[2208.03274](https://arxiv.org/abs/2208.03274) |
|                       | Thur (3/27) 1h | (Presentation) **LLM Safety Benchmarks**<br>[TruthfulQA: Measuring How Models Mimic Human Falsehoods](https://arxiv.org/abs/2109.07958) (15 min presentation).<br>[Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference](https://arxiv.org/abs/2403.04132) (15 min presentation). | Notes Submission Required | [2402.04249](https://arxiv.org/abs/2402.04249)<br/>[2308.03825](https://arxiv.org/abs/2308.03825)<br/>[2406.14598](https://arxiv.org/abs/2406.14598)<br/>[2111.02840](https://arxiv.org/abs/2111.02840) |
| Week 13 (3/30 - 4/5)  | Tue (4/1) 2h   | (Presentation) **LLM Prompting and Prompt Injection**<br>[Jailbroken: How Does LLM Safety Training Fail?](https://arxiv.org/abs/2307.02483) (25 min presentation).<br>[Universal and Transferable Adversarial Attacks on Aligned Language Models](https://arxiv.org/abs/2307.15043) (15 min presentation).<br>[Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks](https://arxiv.org/abs/2404.02151) (15 min presentation).<br>[Jailbreaking Black Box Large Language Models in Twenty Queries](https://arxiv.org/abs/2310.08419) (15 min presentation). | Notes Submission Required | [2306.15447](https://arxiv.org/abs/2306.15447)<br/>[2401.06373](https://arxiv.org/abs/2401.06373)<br/>[LLM-Fuzzer: Scaling Assessment of Large Language Model Jailbreaks](https://www.usenix.org/conference/usenixsecurity24/presentation/yu-jiahao)<br/>[2310.06987](https://arxiv.org/abs/2310.06987)<br/>[2306.13213](https://arxiv.org/abs/2306.13213)<br/>[2404.01318](https://arxiv.org/abs/2404.01318)<br/>[2405.09113](https://arxiv.org/abs/2405.09113) |
|                       | Thur (4/3) 1h  | (Presentation) **LLM Finetuning Attacks and Defenses**<br>[Locking Down the Finetuned LLMs Safety](https://arxiv.org/abs/2410.10343) (15 min presentation).<br>[Poisoning Attacks against Support Vector Machines](https://arxiv.org/abs/1206.6389) (15 min presentation) - adjusted due to presenter absence. | Notes Submission Required<br>Course project Due (4/5) | [2409.18169](https://arxiv.org/abs/2409.18169)<br>[2310.03693](https://arxiv.org/abs/2310.03693)<br>[2406.20053](https://arxiv.org/abs/2406.20053)<br>[2404.01099](https://arxiv.org/abs/2404.01099)<br>[2405.16833](https://arxiv.org/abs/2405.16833) |
| Week 14 (4/6 - 4/12)  | Tue (4/8) 2h   | (Lecture) Course Project Discussion, Closing Remarks |                                                         |      |
| Week 15 (4/13-4/19)   | Fri (4/19)     | Grade Released                                               |                                                         |      |


</div>

<h4 id='ext'>Extended Topics <a href='#ext'>#</a></h4>

*Trustworthy deep learning is a broad area. Some important topics are not covered in lectures and presentations due to the limited time frame. Some of them are listed below.*

- LLM Hallucination
- Risks of LLM agents
- Reward hacking and goal misspecification in RL and RLHF
- Social-economic Impact with Generative AI
- ...

<h4 id='projects'>Assignments and Project <a href='#projects'>#</a></h4>

- [Homework 0](https://canvas.sfu.ca/courses/88687/assignments/1051678)
  - Deadline: 23:59, Jan 18, 2025
  - Score released (Jan 28, 2025)
- Presentation:
  - [Signing-up spreadsheet](https://canvas.sfu.ca/courses/88687/discussion_topics/1916702)
  - Signing-up deadline: Feb 8, 2025
  - Presentation date: see the signed slot
- [Course Project](https://canvas.sfu.ca/courses/88687/assignments/1056577):
  - Deadline: Apr 5, 2025
- Note Submission:
  - Submission links dynamically released on Canvas
  - Only for student presentation dates
  - Due 7 days after each presentation date
  - Submit on Canvas
  - Up to 3 exemptions

<h4 id='info'>Information Platform <a href='#info'>#</a></h4>

- Course website (here)
- [Canvas](https://canvas.sfu.ca/courses/88687)
- [Piazza](https://piazza.com/sfu.ca/spring2025/cmpt419983/home)
- [Syllabus](https://1sfu-my.sharepoint.com/:b:/g/personal/linyi_sfu_ca/EZnYhyYIANdPndmwYN1855EBevvjiS9gxOcM7fCfrgHDFQ?e=raqrmk)

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
